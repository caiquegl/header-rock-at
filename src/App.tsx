import { HeaderDefault } from "./lib";

function App() {
  return (
    <HeaderDefault
      user={{ email: "caique garcia", name: "caique garcia", avatar_url: "" }}
      organizationActive={{
        name: "organizaçao 1",
        avatar_url: "",
        id: 1,
      }}
      listOrganization={[
        {
          name: "organizaçao 1",
          avatar_url: "",
          id: 1,
        },
      ]}
      changeOrganization={(organization: any) => console.log(organization)}
      workspaceActive={{
        name: "Workspace 1",
        avatar_url: "",
        id: 1,
      }}
      listWorkspace={[
        {
          name: "Workspace 1",
          avatar_url: "",
          id: 1,
        },
      ]}
      changeWorkspace={(organization: any) => console.log(organization)}
      appActive={{
        name: "app 1",
        avatar_url: "",
        id: 1,
      }}
      listApp={[
        {
          name: "app 1",
          avatar_url: "",
          id: 1,
        },
      ]}
      changeApp={(app: any) => console.log(app)}
      logout={() => console.log("chamou")}
      listMenu={
        <>
          <p>teste</p>
        </>
      }
    />
  );
}

export default App;
