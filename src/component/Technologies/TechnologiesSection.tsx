import { use, useState } from "react";
import SectionHeader from "./SectionHeader";
import TechCard from "./TechCard";
import StackSidebar from "./StackSidebar";
import Toast from "./Toast"; 
import type { Technology } from "../Types";

const fetchTechnologies = async () => {
  try {
    const response = await fetch("/technologies.json");
    if (!response.ok) throw new Error("Failed to fetch data");
    return await response.json();
  } catch (error) {
    console.error("Error loading technologies:", error);
    return [];
  }
};

const techPromise = fetchTechnologies();

export default function TechnologiesSection() {
  const technologies = use<Technology[]>(techPromise);
  const [selectedStack, setSelectedStack] = useState<Technology[]>([]);
  
 
  const [toastMessage, setToastMessage] = useState("");

  const handleAddToStack = (tech:Technology) => {
    const isAlreadyAdded = selectedStack.find((item) => item.id === tech.id);
    if (!isAlreadyAdded) {
      setSelectedStack([...selectedStack, tech]);
      
     
      setToastMessage(`${tech.name} has been added to your stack!`);

      
      setTimeout(() => {
        setToastMessage("");
      }, 1000);
    }
  };

  const handleRemove = (techId:string) => {
    const updatedStack = selectedStack.filter((item) => item.id !== techId);
    setSelectedStack(updatedStack);
  };

  const handleRemoveAll = () => {
    setSelectedStack([]);
  };

  return (
    <section className="bg-white py-20 relative">
      <div className="container mx-auto px-4">
        <SectionHeader />

        <div className="grid grid-cols-4 items-start gap-8">
          
         
          <div className="col-span-3 grid grid-cols-3 gap-6">
            {technologies.map((tech) => {
              const isAdded = selectedStack.some((item) => item.id === tech.id);
              
              return (
                <TechCard 
                  key={tech.id} 
                  tech={tech} 
                  onAdd={handleAddToStack}
                  isAdded={isAdded}
                />
              );
            })}
          </div>

          
          <div className="col-span-1">
            <StackSidebar 
              stack={selectedStack} 
              onRemove={handleRemove} 
              onRemoveAll={handleRemoveAll} 
            />
          </div>
        </div>
      </div>

      
      <Toast message={toastMessage} />
    </section>
  );
}