import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Alert, AlertDescription } from '../ui/alert';
import { Badge } from '../ui/badge';
import { FileText, Globe, Code, Terminal, Upload, CheckCircle } from 'lucide-react';

export default function ExportInstructions() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Globe className="w-5 h-5 mr-2" />
            Deployment Instructions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <CheckCircle className="h-4 w-4" />
            <AlertDescription>
              After editing your SEO configurations, follow these steps to deploy them to your website.
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                  <FileText className="w-3 h-3 mr-1" />
                  Robots.txt
                </Badge>
              </div>
              <div className="text-sm space-y-2">
                <p><strong>1. Download the file</strong></p>
                <p className="text-muted-foreground pl-4">Click "Download" button to get robots.txt</p>
                
                <p><strong>2. Upload to your website</strong></p>
                <p className="text-muted-foreground pl-4">Place the file at your website's root directory</p>
                
                <p><strong>3. Verify deployment</strong></p>
                <p className="text-muted-foreground pl-4">Visit https://thinkments.com/robots.txt to confirm</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  <Code className="w-3 h-3 mr-1" />
                  Business Schema
                </Badge>
              </div>
              <div className="text-sm space-y-2">
                <p><strong>1. Copy the JSON</strong></p>
                <p className="text-muted-foreground pl-4">Click "Copy" button to get the schema</p>
                
                <p><strong>2. Add to website head</strong></p>
                <p className="text-muted-foreground pl-4">Insert as JSON-LD script in your HTML head</p>
                
                <p><strong>3. Test with tools</strong></p>
                <p className="text-muted-foreground pl-4">Use Google's Rich Results Test to verify</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Terminal className="w-5 h-5 mr-2" />
            Code Integration Example
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium mb-2">Adding Business Schema to HTML</h4>
              <pre className="text-xs bg-muted p-3 rounded-md overflow-x-auto">
{`<!-- Add this to your website's <head> section -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "ThinkMents",
  // ... your schema content here
}
</script>`}
              </pre>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-2">React Component Example</h4>
              <pre className="text-xs bg-muted p-3 rounded-md overflow-x-auto">
{`// In your React component
import { Helmet } from 'react-helmet-async';

const businessSchema = {
  "@context": "https://schema.org",
  // ... your schema data
};

return (
  <Helmet>
    <script type="application/ld+json">
      {JSON.stringify(businessSchema)}
    </script>
  </Helmet>
);`}
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Upload className="w-5 h-5 mr-2" />
            Testing Your Deployment
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <div>
              <strong>Robots.txt Testing:</strong>
              <ul className="list-disc list-inside text-muted-foreground ml-4 mt-1">
                <li>Visit your-domain.com/robots.txt directly in browser</li>
                <li>Use Google Search Console's robots.txt Tester</li>
                <li>Check that search engines can access the file</li>
              </ul>
            </div>
            
            <div>
              <strong>Schema Testing:</strong>
              <ul className="list-disc list-inside text-muted-foreground ml-4 mt-1">
                <li>Use Google's Rich Results Test tool</li>
                <li>Check Schema.org Validator</li>
                <li>Verify in Google Search Console</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}