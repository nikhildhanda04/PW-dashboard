import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { GripVertical, Pencil, Plus, Trash2, ChevronRight } from 'lucide-react';

const Curriculum = () => {
  const [sections, setSections] = useState([
    {
      id: "section1",
      name: "Section name",
      lectures: [
        { id: "lecture1", name: "Lecture name", content: "" },
        { id: "lecture2", name: "Lecture name", content: "" },
      ],
    },
  ]);

  const [editingSectionId, setEditingSectionId] = useState(null);
  const [editingLectureId, setEditingLectureId] = useState(null);

  useEffect(() => {
    if (sections.length === 0) {
      setSections([
        {
          id: `section-${Date.now()}`,
          name: "Introduction",
          lectures: [
            { id: `lecture-${Date.now()}-1`, name: "Welcome to the course", content: "" },
            { id: `lecture-${Date.now()}-2`, name: "Course overview", content: "" },
          ],
        },
      ]);
    }
  }, []);

  const addSection = () => {
    const newSection = {
      id: `section-${Date.now()}`,
      name: "New Section",
      lectures: [],
    };
    setSections([...sections, newSection]);
  };

  const addLecture = (sectionId) => {
    setSections(prevSections =>
      prevSections.map(section =>
        section.id === sectionId
          ? {
              ...section,
              lectures: [
                ...section.lectures,
                { id: `lecture-${Date.now()}`, name: "New Lecture", content: "" },
              ],
            }
          : section
      )
    );
  };

  const removeSection = (sectionId) => {
    setSections(prevSections => prevSections.filter(section => section.id !== sectionId));
  };

  const removeLecture = (sectionId, lectureId) => {
    setSections(prevSections =>
      prevSections.map(section =>
        section.id === sectionId
          ? {
              ...section,
              lectures: section.lectures.filter(lecture => lecture.id !== lectureId),
            }
          : section
      )
    );
  };

  const updateSectionName = (sectionId, newName) => {
    setSections(prevSections =>
      prevSections.map(section =>
        section.id === sectionId ? { ...section, name: newName } : section
      )
    );
  };

  const updateLectureName = (sectionId, lectureId, newName) => {
    setSections(prevSections =>
      prevSections.map(section =>
        section.id === sectionId
          ? {
              ...section,
              lectures: section.lectures.map(lecture =>
                lecture.id === lectureId ? { ...lecture, name: newName } : lecture
              ),
            }
          : section
      )
    );
  };

  const onDragEndSection = (event, info, index) => {
    const newSections = [...sections];
    const [removed] = newSections.splice(index, 1);
    newSections.splice(Math.round(info.point.y / 100), 0, removed);
    setSections(newSections);
  };

  const onDragEndLecture = (event, info, sectionIndex, lectureIndex) => {
    const newSections = [...sections];
    const [removed] = newSections[sectionIndex].lectures.splice(lectureIndex, 1);
    newSections[sectionIndex].lectures.splice(Math.round(info.point.y / 50), 0, removed);
    setSections(newSections);
  };

  return (
    <div className="space-y-6">
      {sections.length > 0 && (
        <div className="space-y-4">
          {sections.map((section, sectionIndex) => (
            <motion.div
              key={section.id}
              drag
              dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
              dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
              onDragEnd={(event, info) => onDragEndSection(event, info, sectionIndex)}
              className="bg-gray-50 rounded-lg p-4"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <GripVertical className="h-5 w-5 text-gray-400 cursor-move" />
                  <span className="font-medium">Section {String(sectionIndex + 1).padStart(2, '0')}:</span>
                  {editingSectionId === section.id ? (
                    <Input
                      value={section.name}
                      onChange={(e) => updateSectionName(section.id, e.target.value)}
                      onBlur={() => setEditingSectionId(null)}
                      className="w-48 h-6 p-1 text-sm"
                      autoFocus
                    />
                  ) : (
                    <span>{section.name}</span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" onClick={() => setEditingSectionId(section.id)}>
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => addLecture(section.id)}>
                    <Plus className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => removeSection(section.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2">
                {section.lectures.map((lecture, lectureIndex) => (
                  <motion.div
                    key={lecture.id}
                    drag
                    dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
                    dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
                    onDragEnd={(event, info) => onDragEndLecture(event, info, sectionIndex, lectureIndex)}
                    className="bg-white rounded p-3 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <GripVertical className="h-4 w-4 text-gray-400 cursor-move" />
                      {editingLectureId === lecture.id ? (
                        <Input
                          value={lecture.name}
                          onChange={(e) => updateLectureName(section.id, lecture.id, e.target.value)}
                          onBlur={() => setEditingLectureId(null)}
                          className="w-48 h-6 p-1 text-sm"
                          autoFocus
                        />
                      ) : (
                        <span>{lecture.name}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <a href={`/contentcourse`}>
                        <Button variant="outline" size="sm" className="flex items-center gap-1">
                          Contents
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </a>
                      <Button variant="ghost" size="icon" onClick={() => setEditingLectureId(lecture.id)}>
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => removeLecture(section.id, lecture.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
              <Button 
                variant="outline" 
                className="w-full py-6 border-dashed text-blue-600 hover:bg-blue-50"
                onClick={addSection}
              >
                Add Section
              </Button>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Curriculum;