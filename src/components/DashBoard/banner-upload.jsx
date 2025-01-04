import React, { useState, useRef, useEffect } from "react";
import { X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { motion, useAnimation } from "framer-motion";

const BannerUpload = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState({ website: [], app: [] });
  const [activeMode, setActiveMode] = useState("website");
  const fileInputRef = useRef(null);
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (selectedImages[activeMode].length > 1 && !isHovered) {
      controls.start({
        x: `-${100 * (selectedImages[activeMode].length - 1)}%`,
        transition: {
          duration: selectedImages[activeMode].length * 4,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    } else {
      controls.stop();
    }
  }, [selectedImages, activeMode, isHovered, controls]);

  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map(file => URL.createObjectURL(file));
    setSelectedImages(prev => ({
      ...prev,
      [activeMode]: [...prev[activeMode], ...newImages],
    }));
    setIsOpen(false);
  };

  const handleRemoveImage = (index) => {
    if (window.confirm("Are you sure you want to remove this banner?")) {
      setSelectedImages(prev => ({
        ...prev,
        [activeMode]: prev[activeMode].filter((_, i) => i !== index),
      }));
    }
  };

  return (
    <>
      <Card className="max-w-full sm:w-[609px] h-auto sm:h-[424px] mx-auto">
        <CardHeader className="flex flex-col sm:flex-row justify-between items-center p-4">
          <CardTitle className="text-xl font-semibold mb-4 sm:mb-0">Add Banner</CardTitle>
          <div className="flex space-x-4">
            <Button 
              onClick={() => setActiveMode("website")} 
              className={activeMode === "website" ? "bg-blue-500 hover:bg-blue-600 text-white" : "bg-gray-200"}
            >
              Website
            </Button>
            <Button 
              onClick={() => setActiveMode("app")} 
              className={activeMode === "app" ? "bg-blue-500 hover:bg-blue-600 text-white" : "bg-gray-200"}
            >
              App
            </Button>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-between h-[324px] p-0 space-y-4">
          <div className="relative w-full bg-gray-100 overflow-hidden h-[264px]">
            {selectedImages[activeMode].length > 0 ? (
              <motion.div
                className="flex h-full"
                animate={controls}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {selectedImages[activeMode].map((image, index) => (
                  <div key={index} className="relative flex-shrink-0 w-full h-full">
                    <img
                      src={image}
                      alt={`Selected banner ${index + 1}`}
                      className="w-full h-full object-contain rounded-lg shadow-md"
                    />
                    <button
                      className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-red-500 hover:text-white transition"
                      onClick={() => handleRemoveImage(index)}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </motion.div>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500">
                No banners uploaded
              </div>
            )}
          </div>
          <Button
            className="px-20 bg-blue-500 hover:bg-blue-600 text-white"
            onClick={() => setIsOpen(true)}
          >
            Add New Banner
          </Button>
        </CardContent>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex justify-between items-center">
              Attach File
            </DialogTitle>
          </DialogHeader>
          <div
            className="border-2 border-dashed rounded-lg p-8 text-center"
            onDrop={(e) => {
              e.preventDefault();
              handleFileSelect(e);
            }}
            onDragOver={(e) => e.preventDefault()}
          >
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileSelect}
              accept="image/*"
              multiple
            />
            <p className="text-gray-500 mb-4">
              Drag and drop files or{" "}
              <button
                className="text-blue-500 hover:underline"
                onClick={() => fileInputRef.current?.click()}
              >
                browse files
              </button>
            </p>
            <div className="flex justify-between mt-8">
              <Button
                variant="secondary"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </Button>
              <Button
                className="bg-blue-500 hover:bg-blue-600 text-white"
                onClick={() => fileInputRef.current?.click()}
              >
                Attach Files
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BannerUpload;