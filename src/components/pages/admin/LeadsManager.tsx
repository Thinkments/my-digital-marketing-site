import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  RefreshCw, 
  Mail, 
  Phone, 
  Calendar,
  Filter,
  ChevronDown,
  ChevronUp,
  Eye,
  X,
  MessageSquare,
  Clock,
  DollarSign,
  Briefcase,
  User
} from 'lucide-react';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../../ui/dialog';
import { Badge } from '../../ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Textarea } from '../../ui/textarea';

// Lead interface
interface Lead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  businessName?: string;
  service: string;
  budget: string;
  projectDescription: string;
  referralSource?: string;
  status: string;
  submittedAt: string;
  notes?: string[];
}

// Service options for the filter
const SERVICES = [
  'Website Design',
  'SEO',
  'Google Marketing',
  'Social Media Marketing',
  'Videography',
  'Virtual Tours',
  'AI Podcast Production',
  'AI 3D Generation',
  'Content Marketing',
  'Branding',
  'E-commerce',
  'Other'
];

// Status options
const STATUSES = [
  'New Lead',
  'Contacted',
  'Proposal Sent',
  'Active Project',
  'Completed',
  'Lost/Closed'
];

// Status color mapping
const getStatusColor = (status: string): string => {
  switch (status) {
    case 'New Lead':
      return 'bg-blue-500 hover:bg-blue-600';
    case 'Contacted':
      return 'bg-yellow-500 hover:bg-yellow-600';
    case 'Proposal Sent':
      return 'bg-purple-500 hover:bg-purple-600';
    case 'Active Project':
      return 'bg-green-500 hover:bg-green-600';
    case 'Completed':
      return 'bg-gray-500 hover:bg-gray-600';
    case 'Lost/Closed':
      return 'bg-red-500 hover:bg-red-600';
    default:
      return 'bg-gray-500 hover:bg-gray-600';
  }
};

export default function LeadsManager() {
  // State management
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [serviceFilter, setServiceFilter] = useState('all');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [sortField, setSortField] = useState<'date' | 'name' | 'status'>('date');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [newNote, setNewNote] = useState('');

  // Fetch leads on mount
  useEffect(() => {
    fetchLeads();
  }, []);

  // Fetch leads from Netlify function
  const fetchLeads = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/.netlify/functions/get-leads');
      
      if (!response.ok) {
        throw new Error('Failed to fetch leads');
      }
      
      const data = await response.json();
      setLeads(data.leads || []);
    } catch (err) {
      console.error('Error fetching leads:', err);
      setError('Failed to load leads. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Update lead status
  const updateLeadStatus = async (leadId: string, newStatus: string) => {
    try {
      const response = await fetch('/.netlify/functions/update-lead-status', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ leadId, status: newStatus }),
      });

      if (!response.ok) {
        throw new Error('Failed to update status');
      }

      // Update local state
      setLeads(prevLeads =>
        prevLeads.map(lead =>
          lead.id === leadId ? { ...lead, status: newStatus } : lead
        )
      );

      // Update selected lead if it's the one being modified
      if (selectedLead?.id === leadId) {
        setSelectedLead({ ...selectedLead, status: newStatus });
      }
    } catch (err) {
      console.error('Error updating status:', err);
      alert('Failed to update status. Please try again.');
    }
  };

  // Add note to lead
  const addNoteToLead = async () => {
    if (!selectedLead || !newNote.trim()) return;

    try {
      const response = await fetch('/.netlify/functions/add-lead-note', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          leadId: selectedLead.id, 
          note: newNote.trim() 
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add note');
      }

      const updatedNotes = [...(selectedLead.notes || []), newNote.trim()];
      
      // Update local state
      setLeads(prevLeads =>
        prevLeads.map(lead =>
          lead.id === selectedLead.id 
            ? { ...lead, notes: updatedNotes } 
            : lead
        )
      );

      setSelectedLead({ ...selectedLead, notes: updatedNotes });
      setNewNote('');
    } catch (err) {
      console.error('Error adding note:', err);
      alert('Failed to add note. Please try again.');
    }
  };

  // Filter and sort leads
  const filteredAndSortedLeads = useMemo(() => {
    let filtered = leads;

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        lead =>
          lead.name.toLowerCase().includes(query) ||
          lead.email.toLowerCase().includes(query) ||
          lead.businessName?.toLowerCase().includes(query)
      );
    }

    // Apply status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(lead => lead.status === statusFilter);
    }

    // Apply service filter
    if (serviceFilter !== 'all') {
      filtered = filtered.filter(lead => lead.service === serviceFilter);
    }

    // Sort leads
    const sorted = [...filtered].sort((a, b) => {
      let comparison = 0;

      switch (sortField) {
        case 'date':
          comparison = new Date(a.submittedAt).getTime() - new Date(b.submittedAt).getTime();
          break;
        case 'name':
          comparison = a.name.localeCompare(b.name);
          break;
        case 'status':
          comparison = a.status.localeCompare(b.status);
          break;
      }

      return sortDirection === 'asc' ? comparison : -comparison;
    });

    return sorted;
  }, [leads, searchQuery, statusFilter, serviceFilter, sortField, sortDirection]);

  // Calculate stats
  const stats = useMemo(() => {
    const total = leads.length;
    const newLeads = leads.filter(lead => lead.status === 'New Lead').length;
    
    return { total, newLeads };
  }, [leads]);

  // Handle sort
  const handleSort = (field: 'date' | 'name' | 'status') => {
    if (sortField === field) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  // Format date
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  // Render sort icon
  const SortIcon = ({ field }: { field: 'date' | 'name' | 'status' }) => {
    if (sortField !== field) return null;
    return sortDirection === 'asc' ? <ChevronUp className="w-4 h-4 inline ml-1" /> : <ChevronDown className="w-4 h-4 inline ml-1" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A8460] via-[#00C98D] to-[#96FFBF] p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Card className="bg-white/95 backdrop-blur-sm shadow-xl">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="text-3xl mb-2">Client Leads</CardTitle>
                  <p className="text-muted-foreground">
                    {stats.total} total leads ({stats.newLeads} new)
                  </p>
                </div>
                <Button
                  onClick={fetchLeads}
                  disabled={isLoading}
                  className="bg-gradient-to-r from-[#96FFBF] to-[#00C98D] text-black hover:from-[#5ADFA0] hover:to-[#0A8460]"
                >
                  <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
                  Refresh
                </Button>
              </div>
            </CardHeader>
          </Card>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6"
        >
          <Card className="bg-white/95 backdrop-blur-sm shadow-xl">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Search Input */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    type="text"
                    placeholder="Search by name, email, or business..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* Status Filter */}
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Statuses" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    {STATUSES.map(status => (
                      <SelectItem key={status} value={status}>
                        {status}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Service Filter */}
                <Select value={serviceFilter} onValueChange={setServiceFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Services" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Services</SelectItem>
                    {SERVICES.map(service => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Leads Table / List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="bg-white/95 backdrop-blur-sm shadow-xl">
            <CardContent className="p-0">
              {isLoading ? (
                <div className="flex items-center justify-center py-20">
                  <RefreshCw className="w-8 h-8 animate-spin text-[#00C98D]" />
                  <span className="ml-3 text-muted-foreground">Loading leads...</span>
                </div>
              ) : error ? (
                <div className="flex flex-col items-center justify-center py-20">
                  <p className="text-red-500 mb-4">{error}</p>
                  <Button onClick={fetchLeads}>Try Again</Button>
                </div>
              ) : filteredAndSortedLeads.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
                  <MessageSquare className="w-16 h-16 mb-4 opacity-50" />
                  <p className="text-xl">No leads found</p>
                  <p className="text-sm mt-2">
                    {searchQuery || statusFilter !== 'all' || serviceFilter !== 'all'
                      ? 'Try adjusting your filters'
                      : 'New leads will appear here'}
                  </p>
                </div>
              ) : (
                <>
                  {/* Desktop Table View */}
                  <div className="hidden md:block overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                          <th 
                            className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                            onClick={() => handleSort('date')}
                          >
                            Date <SortIcon field="date" />
                          </th>
                          <th 
                            className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                            onClick={() => handleSort('name')}
                          >
                            Name <SortIcon field="name" />
                          </th>
                          <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Contact
                          </th>
                          <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Service
                          </th>
                          <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Budget
                          </th>
                          <th 
                            className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                            onClick={() => handleSort('status')}
                          >
                            Status <SortIcon field="status" />
                          </th>
                          <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {filteredAndSortedLeads.map((lead, index) => (
                          <motion.tr
                            key={lead.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="hover:bg-gray-50 transition-colors"
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                                {formatDate(lead.submittedAt)}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div>
                                <div className="font-medium text-gray-900">{lead.name}</div>
                                {lead.businessName && (
                                  <div className="text-sm text-gray-500">{lead.businessName}</div>
                                )}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              <div className="space-y-1">
                                <a 
                                  href={`mailto:${lead.email}`}
                                  className="flex items-center text-[#00C98D] hover:text-[#0A8460] transition-colors"
                                >
                                  <Mail className="w-3 h-3 mr-1" />
                                  {lead.email}
                                </a>
                                {lead.phone && (
                                  <a 
                                    href={`tel:${lead.phone}`}
                                    className="flex items-center text-[#00C98D] hover:text-[#0A8460] transition-colors"
                                  >
                                    <Phone className="w-3 h-3 mr-1" />
                                    {lead.phone}
                                  </a>
                                )}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {lead.service}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {lead.budget}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <Select
                                value={lead.status}
                                onValueChange={(value) => updateLeadStatus(lead.id, value)}
                              >
                                <SelectTrigger className="w-40">
                                  <Badge className={`${getStatusColor(lead.status)} text-white`}>
                                    {lead.status}
                                  </Badge>
                                </SelectTrigger>
                                <SelectContent>
                                  {STATUSES.map(status => (
                                    <SelectItem key={status} value={status}>
                                      <Badge className={`${getStatusColor(status)} text-white`}>
                                        {status}
                                      </Badge>
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => setSelectedLead(lead)}
                              >
                                <Eye className="w-4 h-4 mr-1" />
                                View
                              </Button>
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile Card View */}
                  <div className="md:hidden divide-y divide-gray-200">
                    {filteredAndSortedLeads.map((lead, index) => (
                      <motion.div
                        key={lead.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="p-4 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-medium text-gray-900">{lead.name}</h3>
                            {lead.businessName && (
                              <p className="text-sm text-gray-500">{lead.businessName}</p>
                            )}
                          </div>
                          <Badge className={`${getStatusColor(lead.status)} text-white`}>
                            {lead.status}
                          </Badge>
                        </div>
                        
                        <div className="space-y-2 text-sm mb-3">
                          <div className="flex items-center text-gray-600">
                            <Calendar className="w-4 h-4 mr-2" />
                            {formatDate(lead.submittedAt)}
                          </div>
                          <a 
                            href={`mailto:${lead.email}`}
                            className="flex items-center text-[#00C98D] hover:text-[#0A8460]"
                          >
                            <Mail className="w-4 h-4 mr-2" />
                            {lead.email}
                          </a>
                          {lead.phone && (
                            <a 
                              href={`tel:${lead.phone}`}
                              className="flex items-center text-[#00C98D] hover:text-[#0A8460]"
                            >
                              <Phone className="w-4 h-4 mr-2" />
                              {lead.phone}
                            </a>
                          )}
                          <div className="flex items-center text-gray-600">
                            <Briefcase className="w-4 h-4 mr-2" />
                            {lead.service}
                          </div>
                          <div className="flex items-center text-gray-600">
                            <DollarSign className="w-4 h-4 mr-2" />
                            {lead.budget}
                          </div>
                        </div>

                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setSelectedLead(lead)}
                          className="w-full"
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Lead Detail Modal */}
        <Dialog open={!!selectedLead} onOpenChange={() => setSelectedLead(null)}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center justify-between">
                <span>Lead Details</span>
                {selectedLead && (
                  <Badge className={`${getStatusColor(selectedLead.status)} text-white`}>
                    {selectedLead.status}
                  </Badge>
                )}
              </DialogTitle>
              <DialogDescription>
                Submitted on {selectedLead && formatDate(selectedLead.submittedAt)}
              </DialogDescription>
            </DialogHeader>

            {selectedLead && (
              <div className="space-y-6">
                {/* Contact Information */}
                <div>
                  <h3 className="font-medium text-lg mb-3 flex items-center">
                    <User className="w-5 h-5 mr-2 text-[#00C98D]" />
                    Contact Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Name</p>
                      <p className="font-medium">{selectedLead.name}</p>
                    </div>
                    {selectedLead.businessName && (
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Business Name</p>
                        <p className="font-medium">{selectedLead.businessName}</p>
                      </div>
                    )}
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Email</p>
                      <a 
                        href={`mailto:${selectedLead.email}`}
                        className="font-medium text-[#00C98D] hover:text-[#0A8460] flex items-center"
                      >
                        <Mail className="w-4 h-4 mr-1" />
                        {selectedLead.email}
                      </a>
                    </div>
                    {selectedLead.phone && (
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Phone</p>
                        <a 
                          href={`tel:${selectedLead.phone}`}
                          className="font-medium text-[#00C98D] hover:text-[#0A8460] flex items-center"
                        >
                          <Phone className="w-4 h-4 mr-1" />
                          {selectedLead.phone}
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <h3 className="font-medium text-lg mb-3 flex items-center">
                    <Briefcase className="w-5 h-5 mr-2 text-[#00C98D]" />
                    Project Details
                  </h3>
                  <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Service Requested</p>
                      <p className="font-medium">{selectedLead.service}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Budget</p>
                      <p className="font-medium">{selectedLead.budget}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Project Description</p>
                      <p className="whitespace-pre-wrap">{selectedLead.projectDescription}</p>
                    </div>
                    {selectedLead.referralSource && (
                      <div>
                        <p className="text-sm text-gray-500 mb-1">How They Heard About Us</p>
                        <p className="font-medium">{selectedLead.referralSource}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Status Management */}
                <div>
                  <h3 className="font-medium text-lg mb-3 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-[#00C98D]" />
                    Status Management
                  </h3>
                  <Select
                    value={selectedLead.status}
                    onValueChange={(value) => updateLeadStatus(selectedLead.id, value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {STATUSES.map(status => (
                        <SelectItem key={status} value={status}>
                          <div className="flex items-center">
                            <Badge className={`${getStatusColor(status)} text-white mr-2`}>
                              {status}
                            </Badge>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Notes Section */}
                <div>
                  <h3 className="font-medium text-lg mb-3 flex items-center">
                    <MessageSquare className="w-5 h-5 mr-2 text-[#00C98D]" />
                    Internal Notes
                  </h3>
                  
                  {/* Existing Notes */}
                  {selectedLead.notes && selectedLead.notes.length > 0 && (
                    <div className="space-y-2 mb-4">
                      {selectedLead.notes.map((note, index) => (
                        <div key={index} className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
                          <p className="text-sm">{note}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Add New Note */}
                  <div className="space-y-2">
                    <Textarea
                      placeholder="Add a new note..."
                      value={newNote}
                      onChange={(e) => setNewNote(e.target.value)}
                      rows={3}
                    />
                    <Button
                      onClick={addNoteToLead}
                      disabled={!newNote.trim()}
                      className="bg-gradient-to-r from-[#96FFBF] to-[#00C98D] text-black hover:from-[#5ADFA0] hover:to-[#0A8460]"
                    >
                      Add Note
                    </Button>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="flex flex-wrap gap-3 pt-4 border-t">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-[#96FFBF] to-[#00C98D] text-black hover:from-[#5ADFA0] hover:to-[#0A8460]"
                  >
                    <a href={`mailto:${selectedLead.email}`}>
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </a>
                  </Button>
                  {selectedLead.phone && (
                    <Button
                      asChild
                      variant="outline"
                    >
                      <a href={`tel:${selectedLead.phone}`}>
                        <Phone className="w-4 h-4 mr-2" />
                        Call
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
