"use client";
import { Button } from "@/components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Dashboard() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div className="flex h-screen justify-center items-center">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel
          collapsedSize={0}
          collapsible
          minSize={10}
          onCollapse={() => setIsCollapsed(true)}
          onExpand={() => setIsCollapsed(false)}
          maxSize={15}
          className={cn(
            "py-4",
            isCollapsed
              ? "min-w-[50px] transition-all duration-300 ease-in-out CollapsibleContent px-2"
              : "px-4"
          )}
        >
          <Button className="px-[12px]">
            🛠️ {!isCollapsed && "Click me 1"}
          </Button>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>Two</ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
