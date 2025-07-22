export function RecentSalesTable() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="h-2 w-2 rounded-full bg-green-500"></div>
          <span className="text-sm font-medium">Completed</span>
        </div>
        <span className="text-sm text-muted-foreground">$1,234</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
          <span className="text-sm font-medium">Pending</span>
        </div>
        <span className="text-sm text-muted-foreground">$567</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="h-2 w-2 rounded-full bg-green-500"></div>
          <span className="text-sm font-medium">Completed</span>
        </div>
        <span className="text-sm text-muted-foreground">$890</span>
      </div>
    </div>
  );
}
