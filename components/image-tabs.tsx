"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const ImageTabs = () => {
  const [activeTab, setAcitveTab] = useState("organize");

  return (
    <section className="border-t bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* tabs */}
          <div className="flex justify-center gap-2 mb-8">
            <Button
              onClick={() => setAcitveTab("organize")}
              className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === "organize" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            >
              Organize Applications
            </Button>
            <Button
              onClick={() => setAcitveTab("hired")}
              className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === "hired" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            >
              Get Hired
            </Button>
            <Button
              onClick={() => setAcitveTab("board")}
              className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === "board" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            >
              Manage Boards
            </Button>
          </div>
          <div className="relative max-auto max-w-5xl overflow-hidden rounded-lg border-gray-200 shadow-xl">
            {activeTab === "organize" && (
              <Image
                src="/hero-images/hero1.png"
                alt="organize applications"
                width={1200}
                height={800}
              />
            )}
            {activeTab === "hired" && (
              <Image
                src="/hero-images/hero2.png"
                alt="get hired"
                width={1200}
                height={800}
              />
            )}
            {activeTab === "board" && (
              <Image
                src="/hero-images/hero3.png"
                alt="manage boards"
                width={1200}
                height={800}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageTabs;
