import AppSidebar from "./components/AppSidebar";
import PromptInput from "./components/PromptInput";
import { SidebarProvider } from "./components/ui/sidebar";

function App() {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main className="flex-1 min-h-full flex flex-col gap-2 justify-between p-4 pb-8">
          <div className="w-10/12 mx-auto flex-1 flex flex-col gap-2 ">
            <div className="flex-1 rounded-sm border shadow"></div>
            <PromptInput />
          </div>
        </main>
      </SidebarProvider>
    </>
  );
}

export default App;
