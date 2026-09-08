"use client";

import { Board, column, JobApplication } from "@/lib/models/models.type";
import {
  Award,
  Calendar,
  CheckCircle2,
  Mic,
  MoreHorizontal,
  MoreVertical,
  Trash2,
  XCircle,
} from "lucide-react";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import CreateJobApplicationDialog from "./CreateJobApplicationDialog";
import JobApplicationCard from "./job-application-card";

interface KabanBoardProps {
  board: Board;
  userId: string;
}

interface colConfig {
  color: string;
  icon: React.ReactNode;
}

const COL_CONFIG: Array<colConfig> = [
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

function DropAbleColumn({
  column,
  config,
  boradId,
  sortedColumns,
}: {
  column: column;
  config: colConfig;
  boardId: string;
  sortedColumns: column[];
}) {
  const sortedJobs =
    column.jobApplications?.sort((a, b) => a.order - b.order) || [];
  return (
    <Card className="min-w-[300] flex-shrink-0 rounded-lg shadow-md p-0">
      <CardHeader className={`${config.color} text-white  pb-3 pt-3`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {config.icon}{" "}
            <CardTitle className="text-white text-base font-semibold">
              {column.name}
            </CardTitle>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 text-white hover:bg-white/20"
                />
              }
            >
              <MoreVertical className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="text-destructive">
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>

      <CardContent className="space-y-2 pt-4 bg-gray-50/50 min-h-[400px] rounded-b-lg">
        {sortedJobs.map((job, k) => (
          <SortableJobCard
            key={k}
            job={{ ...job, columnId: job.columnId || column._id }}
            columns={sortedColumns}
          />
        ))}
        <CreateJobApplicationDialog columnId={column._id} boardId={boradId} />
      </CardContent>
    </Card>
  );
}

function SortableJobCard({
  job,
  columns,
}: {
  job: JobApplication;
  columns: column[];
}) {
  return <JobApplicationCard job={job} columns={columns} />;
}

const KabanBoard = ({ board, userId }: KabanBoardProps) => {
  const columns = board.columns;
  console.log("first", columns[0].jobApplications);
  const sortedColumn = columns.sort((a, b) => a.order - b.order) || [];
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
                boradId={board?._id}
                sortedColumns={sortedColumn}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default KabanBoard;
