"use client"

import React from "react";
import { Aboutme } from "../Aboutme";
import { Contect } from "../Contect";
import { Me } from "../Me";
import Experience from "../Experiance";
import { Project } from "../Project";
import Journey from "../Journey";
import { useParams } from "next/navigation";



const Page = () => {
  const params = useParams();
  const  id  = params.id;

  switch (id) {
    case "aboutme":
      return <Aboutme />;
    case "contect":
      return <Contect />;
    case "me":
      return <Me />;
    case "experiance":
      return <Experience />;
    case "project":
      return <Project />;
    case "journey":
      return <Journey />;
    default:
      return (
        <div className="h-screen flex justify-center items-center">
          <h1 className="text-3xl font-bold">Page Not Found</h1>
        </div>
      );
  }
};

export default Page;
