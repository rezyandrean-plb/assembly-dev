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
    <div className="space-y-4" data-oid="r3sncos">
      {recentSales.map((sale) => (
        <div
          key={sale.id}
          className="flex items-center gap-4"
          data-oid="ftf44-d"
        >
          <Avatar
            className="h-9 w-9 border border-[#E8EFFF]"
            data-oid="qx:jn6y"
          >
            <AvatarImage
              src={sale.customer.avatar || "/placeholder.svg"}
              alt={sale.customer.name}
              data-oid="xalrbni"
            />
            <AvatarFallback
              className="bg-[#123B79] text-white"
              data-oid="7.83rhn"
            >
              {sale.customer.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1" data-oid="tmiqzn1">
            <p className="text-sm font-medium" data-oid="1b:m.c.">
              {sale.customer.name}
            </p>
            <p className="text-xs text-muted-foreground" data-oid="_:v4c6k">
              {sale.customer.email}
            </p>
          </div>
          <div className="text-sm text-right" data-oid="ab:o7qv">
            <div className="font-medium text-[#123B79]" data-oid="enarw7j">
              ${sale.amount}
            </div>
            <div className="text-xs text-muted-foreground" data-oid="75vuz7u">
              {sale.date}
            </div>
          </div>
          <Badge
            variant={sale.status === "completed" ? "default" : "outline"}
            className="bg-[#123B79]"
            data-oid="pb6:4:5"
          >
            {sale.status}
          </Badge>
        </div>
      ))}
    </div>
  );
}
