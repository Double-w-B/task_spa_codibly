import React from "react";
import { useNavigate } from "react-router-dom";
import StyledHomePage from "./style";
import illustration__HomePage from "../../../assets/illustration-1.webp";

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/pages/1");
  };

  return (
    <main>
      <StyledHomePage>
        <div className="info">
          <h1>recruitment task</h1>
          <h3>Frontend Developer - Intern</h3>
          <p>
            The goal of the task is to implement SPA application with just one
            view. You should use the below API endpoint to display the{" "}
            <strong>paginated list</strong> of products. At the top of the view,
            there should be <strong>text input</strong>, which allows the user
            to <strong>filter results</strong> by id. The input should{" "}
            <strong>accept only numbers</strong>, other signs should not even
            appear. Below this input user should see a <strong>table</strong>{" "}
            displaying the following items’ properties: <strong>id</strong>,{" "}
            <strong>name</strong>, and <strong>year</strong>. Additionally, the{" "}
            <strong>background colour</strong> of each row should be taken from
            the colour property. After clicking on a row a{" "}
            <strong>modal</strong> should be displayed and should present{" "}
            <strong>all item data</strong>. The table should display{" "}
            <strong>5 items per page</strong>. Under the table, there should be
            a <strong>pagination component</strong>, which allows{" "}
            <strong>switching between pages</strong> with “next” and “previous”
            arrows. Please remember about <strong>handling</strong> situations
            when API endpoint returns a <strong>4XX or 5XX error</strong>. In
            such a case the <strong>user should be informed</strong> about the
            error. Apart from React, the technology stack totally ups to you,
            the same applies to styling. As a result of the task, we expect a
            link to a repository on GitHub, GitLab, or bitbucket. Your app
            should start after running <strong>npm install & npm start</strong>.
          </p>
        </div>

        <StyledHomePage.Button onClick={handleClick}>
          Let's Go
        </StyledHomePage.Button>

        <div className="illustration no-select">
          <img src={illustration__HomePage} alt="" draggable={false} />
        </div>
      </StyledHomePage>
    </main>
  );
};

export default HomePage;
