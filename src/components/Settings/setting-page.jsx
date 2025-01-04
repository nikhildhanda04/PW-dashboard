import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ImageIcon } from 'lucide-react';

export default function SettingsPage() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 space-y-2">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" placeholder="Enter your username" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="Enter your phone number" />
              </div>
            </div>
            <div className="w-full md:w-[200px] flex flex-col items-center gap-4">
              <div className="w-32 h-32 rounded-full bg-muted flex items-center justify-center">
                {image ? (
                  <img src={image} alt="Profile" className="w-full h-full object-cover rounded-full" />
                ) : (
                  <ImageIcon className="h-12 w-12 text-muted-foreground" />
                )}
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="fileInput"
              />
              <Button variant="outline" size="sm" onClick={() => document.getElementById('fileInput').click()}>
                Upload Photo
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <div className="relative">
              <Input id="title" placeholder="Enter your title or profession" />
              <span className="absolute right-3 top-2.5 text-sm text-muted-foreground">0/50</span>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="bio">Biography</Label>
            <Textarea id="bio" placeholder="Write a short biography" className="min-h-[100px]" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Company's Social Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="website">Website</Label>
            <Input id="website" type="url" placeholder="https://example.com" />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="facebook">Facebook</Label>
              <Input id="facebook" type="url" placeholder="Enter your Facebook link" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="instagram">Instagram</Label>
              <Input id="instagram" type="url" placeholder="Enter your Instagram link" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="linkedin">LinkedIn</Label>
              <Input id="linkedin" type="url" placeholder="Enter your LinkedIn link" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="youtube">YouTube</Label>
              <Input id="youtube" type="url" placeholder="Enter your YouTube link" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="twitter">Twitter</Label>
              <Input id="twitter" type="url" placeholder="Enter your Twitter link" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="whatsapp">WhatsApp</Label>
              <Input id="whatsapp" placeholder="Enter your WhatsApp number" />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { id: 'reviews', label: 'Notify me about reviews on my course' },
              { id: 'comments', label: 'Notify me about comments on my course' },
              { id: 'downloads', label: 'Notify me about downloads of my lecture notes' },
              { id: 'profile', label: 'Notify me about visits to my profile' },
              { id: 'files', label: 'Notify me about downloads of my lecture sketch file' },
            ].map((item) => (
              <div key={item.id} className="flex items-center space-x-2">
                <Checkbox id={item.id} />
                <Label htmlFor={item.id}>{item.label}</Label>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Change Password</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current">Current Password</Label>
              <Input id="current" type="password" placeholder="Enter your current password" />
            </div>  
            <div className="space-y-2">
              <Label htmlFor="new">New Password</Label>
              <Input id="new" type="password" placeholder="Enter your new password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm">Confirm Password</Label>
              <Input id="confirm" type="password" placeholder="Confirm your new password" />
            </div>
            <Button className="w-full bg-blue-500 hover:bg-blue-600">Save Changes</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}