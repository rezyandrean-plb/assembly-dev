export function PopularCoursesTable() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium">Making The Right Move</p>
          <p className="text-xs text-muted-foreground">HDB, Webinar</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-16 bg-gray-200 rounded-full h-2">
            <div
              className="bg-[#123B79] h-2 rounded-full"
              style={{ width: "75%" }}
            ></div>
          </div>
          <span className="text-sm text-muted-foreground">75%</span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium">
            The Art of Real Estate Investment
          </p>
          <p className="text-xs text-muted-foreground">Analysis, Investment</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-16 bg-gray-200 rounded-full h-2">
            <div
              className="bg-[#123B79] h-2 rounded-full"
              style={{ width: "60%" }}
            ></div>
          </div>
          <span className="text-sm text-muted-foreground">60%</span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium">Property Portfolio Strategy</p>
          <p className="text-xs text-muted-foreground">Strategy, Portfolio</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-16 bg-gray-200 rounded-full h-2">
            <div
              className="bg-[#123B79] h-2 rounded-full"
              style={{ width: "45%" }}
            ></div>
          </div>
          <span className="text-sm text-muted-foreground">45%</span>
        </div>
      </div>
    </div>
  );
}
