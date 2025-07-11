import AppSidebar from "./components/AppSidebar";
import MessagesDisplay from "./components/MessagesDisplay";
import PromptInput from "./components/PromptInput";
import { SidebarProvider } from "./components/ui/sidebar";

function App() {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main className="flex-1 max-h-screen h-screen flex flex-col gap-2 justify-between p-4 py-12">
          <div className="w-8/12 mx-auto flex-1 flex flex-col gap-6 max-h-full">
            
            <MessagesDisplay/>
            <PromptInput />
          </div>
        </main>
      </SidebarProvider>
    </>
  );
}

export default App;
