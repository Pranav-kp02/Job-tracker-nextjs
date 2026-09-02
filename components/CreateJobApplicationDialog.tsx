import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

interface CreateJobApplicationDialogProps {
  columnId: string;
  boardId: string;
}
const CreateJobApplicationDialog = ({
  columnId,
  boardId,
}: CreateJobApplicationDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button
          variant="outline"
          className="w-full justify-start text-muted-foreground border-dashed border-2"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Job
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Add Job Application</DialogTitle>
          <DialogDescription>Track a new job application</DialogDescription>
          <form className="space-y-4">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company">Company*</Label>
                  <Input id="company" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="position">Position*</Label>
                  <Input id="position" required />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="salary">Salary</Label>
                  <Input id="salary" placeholder="eg: 2 lpa" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="jobUrl">Job URL</Label>
                <Input id="jobUrl" placeholder="http://...." />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags">Tag (comma-seperated)</Label>
                <Input id="tags" placeholder="React, tailwind, nextjs" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea rows={3} id="description" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea rows={3} id="notes" />
              </div>
            </div>

            <DialogFooter>
              <Button type="button" variant="outline">
                Cancel
              </Button>
              <Button type="submit">Application</Button>
            </DialogFooter>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CreateJobApplicationDialog;
