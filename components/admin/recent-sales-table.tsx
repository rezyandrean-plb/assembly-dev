import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export function RecentSalesTable() {
  const recentSales = [
    {
      id: "INV-001",
      customer: {
        name: "John Smith",
        email: "john@example.com",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      course: "Making The Right Move",
      amount: 149.99,
      status: "completed",
      date: "2 hours ago",
    },
    {
      id: "INV-002",
      customer: {
        name: "Sarah Johnson",
        email: "sarah@example.com",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      course: "The Art of Real Estate Investment",
      amount: 89.99,
      status: "completed",
      date: "5 hours ago",
    },
    {
      id: "INV-003",
      customer: {
        name: "Michael Brown",
        email: "michael@example.com",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      course: "Property Investment Masterclass",
      amount: 129.99,
      status: "pending",
      date: "1 day ago",
    },
    {
      id: "INV-004",
      customer: {
        name: "Emily Davis",
        email: "emily@example.com",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      course: "Singapore Real Estate Trends 2024",
      amount: 199.99,
      status: "completed",
      date: "2 days ago",
    },
  ];

  return (
    <div className="space-y-4">
      {recentSales.map((sale) => (
        <div key={sale.id} className="flex items-center gap-4">
          <Avatar className="h-9 w-9 border border-[#E8EFFF]">
            <AvatarImage
              src={sale.customer.avatar || "/placeholder.svg"}
              alt={sale.customer.name}
            />

            <AvatarFallback className="bg-[#123B79] text-white">
              {sale.customer.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium">{sale.customer.name}</p>
            <p className="text-xs text-muted-foreground">
              {sale.customer.email}
            </p>
          </div>
          <div className="text-sm text-right">
            <div className="font-medium text-[#123B79]">${sale.amount}</div>
            <div className="text-xs text-muted-foreground">{sale.date}</div>
          </div>
          <Badge
            variant={sale.status === "completed" ? "default" : "outline"}
            className="bg-[#123B79]"
          >
            {sale.status}
          </Badge>
        </div>
      ))}
    </div>
  );
}
