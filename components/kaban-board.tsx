"use client";

import { Board } from "@/lib/models/models.type";
import { Award, Calendar, CheckCircle2, Mic, XCircle } from "lucide-react";
import React from "react";

interface KabanBoardProps {
  board: Board;
  userId: string;
}

const COL_CONFIG: Array<{ color: string; icon: React.ReactNode }> = [
  {
    color: "bg-cyan-500",
    icon: <Calendar className="h-4 w-4" />,
  },
  {
    color: "bg-purple-500",
    icon: <CheckCircle2 className="h-4 w-4" />,
  },
  {
    color: "bg-green-500",
    icon: <Mic className="h-4 w-4" />,
  },
  {
    color: "bg-yellow-500",
    icon: <Award className="h-4 w-4" />,
  },
  {
    color: "bg-red-500",
    icon: <XCircle className="h-4 w-4" />,
  },
];

function DropAbleColumn({}) {}

const KabanBoard = ({ board, userId }: KabanBoardProps) => {
  const columns = board.columns;
  return (
    <>
      <div>
        <div>
          {columns.map((col, key) => {
            const config = COL_CONFIG[key] || {
              color: "bg-cyan-500",
              icon: <Calendar className="h-4 w-4" />,
            };
            return (
              <DropAbleColumn
                key={key}
                column={col}
                config={config}
                boradId={board._id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default KabanBoard;
