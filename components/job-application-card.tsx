import { column, JobApplication } from "@/lib/models/models.type";
import React from "react";
import { Card, CardContent } from "./ui/card";
import { ExternalLink } from "lucide-react";

interface JobApplicationCardProps {
  job: JobApplication;
  columns: column[];
}
const JobApplicationCard = ({ job, columns }: JobApplicationCardProps) => {
  return (
    <>
      <Card>
        <CardContent>
          <div>
            <div>
              <h3>{job.position}</h3>
              <p>{job.company}</p>
              {job.description && <p>{job.description}</p>}
              {job.tags && job.tags.length > 0 && (
                <div>
                  {job.tags.map((tag, k) => (
                    <span key={k}>{tag}</span>
                  ))}
                </div>
              )}
              {job.jobUrl && (
                <a target="_blank" href={job.jobUrl}>
                  <ExternalLink />
                </a>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default JobApplicationCard;
