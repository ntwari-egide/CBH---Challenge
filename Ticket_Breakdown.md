# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### Ticket 1: Add a new column to the Agents table to store custom ids
- User Story
    - As a Facility administrator, I want to be able to assign custom ids to the Agents I work with so that I can easily identify them on reports and in other internal systems.
- Acceptance Criteria:
    - The Agents table has a new column to store custom ids
    - The custom id column is nullable
- Time/Effort Estimate: 1 hour
- Implementation Details:
    - Use a database migration to add the new column to the Agents table
    - Set the default value of the custom id column to null
    - Update the table schema in the application code to reflect the new column

### Ticket 2: Add a form for Facilities to input custom ids for their Agents
- User Story
    - As a Facility administrator, I want to be able to input custom ids for my Agents through a form on my account page so that I can easily assign them to my Agents.
- Acceptance Criteria:
    - A form is available on the Facility's account page for inputting custom ids for their Agents
    - The form has fields for the Agent's internal database id and the custom id the Facility wants to assign to them
    - Submitting the form updates the custom id column in the Agents table for the corresponding Agent
- Time/Effort Estimate: 2 hours
- Implementation Details:
    - Create a new route and template for the form
    - Add a form submission handler to the application code that updates the custom id column in the Agents table
    - Add form validation to ensure that the internal database id field is not empty and corresponds to a valid Agent

### Ticket 3: Modify getShiftsByFacility to include custom ids in the Shift metadata
- User Story
    - As a Facility administrator, I want to see the custom ids of my Agents on the Shift metadata returned by the getShiftsByFacility function so that I can easily identify them when generating reports. This will allow me to more easily match the Shifts to the Agents in my internal systems, and make it easier to reconcile the reports with my own records.
- Acceptance Criteria:
    - The Shift metadata returned by getShiftsByFacility includes the custom id of the Agent assigned to the Shift, if one has been assigned
    - If a custom id has not been assigned, the internal database id is used instead
- Time/Effort Estimate: 1 hour
- Implementation Details:
    - Modify the getShiftsByFacility function to include the custom id in the Shift metadata if it has been set, or the internal database id if it has not
    - Update the application code that calls getShiftsByFacility to expect the custom id in the Shift metadata
### Ticket 4: Modify generateReport to use custom ids when available
- User story
    - As a Facility administrator, I want the generateReport function to use the custom ids that I have assigned to my Agents on the reports it generates so that the reports match my own internal records and systems.
- Acceptance Criteria:
    - The generateReport function uses the custom id of the Agent assigned to a Shift, if one has been assigned
    - If a custom id has not been assigned, the internal database id is used instead
- Time/Effort Estimate: 1 hour
- Implementation Details:
    - Modify the generateReport function to use the custom id of the Agent if it has been set, or the internal database id if it has not
    - Update the application code that calls generateReport to expect custom ids to be used when available

### Ticket 5: Update documentation and comments
- User story
    - As a new team member joining the project, I want the documentation and comments to be up-to-date and comprehensive so that I can quickly understand how the application works and how the recent changes fit into the overall system.
- Acceptance Criteria:
    - All relevant documentation and comments have been updated to reflect the changes made in the previous tickets
- Time/Effort Estimate: 1 hour
- Implementation Details:
    - Review the code changes made in the previous tickets and update any relevant documentation and comments accordingly
    - This includes documentation for user-facing features as well as internal documentation for other developers on the team.
