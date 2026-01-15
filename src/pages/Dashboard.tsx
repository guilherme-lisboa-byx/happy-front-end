import { TrendingUp, TrendingDown, DollarSign, Users, FileCheck, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MetricCard = ({ 
  title, 
  value, 
  change, 
  changeType, 
  icon: Icon 
}: { 
  title: string; 
  value: string; 
  change: string; 
  changeType: "positive" | "negative" | "neutral";
  icon: React.ElementType;
}) => (
  <Card className="bg-card border-border">
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
      <Icon className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold text-foreground">{value}</div>
      <p className={`text-xs flex items-center gap-1 mt-1 ${
        changeType === "positive" ? "text-emerald-500" : 
        changeType === "negative" ? "text-red-500" : 
        "text-muted-foreground"
      }`}>
        {changeType === "positive" && <TrendingUp className="h-3 w-3" />}
        {changeType === "negative" && <TrendingDown className="h-3 w-3" />}
        {change}
      </p>
    </CardContent>
  </Card>
);

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Análise Financeira BYX</h1>
              <p className="text-sm text-muted-foreground">Dashboard de Monitoramento</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              Sistema Online
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Metrics Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <MetricCard 
            title="Receita Total" 
            value="R$ 2.450.000" 
            change="+12.5% vs mês anterior" 
            changeType="positive"
            icon={DollarSign}
          />
          <MetricCard 
            title="Corbans Ativos" 
            value="148" 
            change="+8 novos este mês" 
            changeType="positive"
            icon={Users}
          />
          <MetricCard 
            title="Compliance G5" 
            value="94.2%" 
            change="+2.1% vs meta" 
            changeType="positive"
            icon={FileCheck}
          />
          <MetricCard 
            title="Alertas Pendentes" 
            value="7" 
            change="3 críticos" 
            changeType="negative"
            icon={AlertTriangle}
          />
        </div>

        {/* Products Section */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-foreground mb-4">Análise por Produto</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { name: "Consignado", value: "R$ 1.200.000", percent: 49 },
              { name: "FGTS", value: "R$ 680.000", percent: 28 },
              { name: "Portabilidade", value: "R$ 570.000", percent: 23 },
            ].map((product) => (
              <Card key={product.name} className="bg-card border-border">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-foreground">{product.name}</span>
                    <span className="text-sm text-muted-foreground">{product.percent}%</span>
                  </div>
                  <div className="text-xl font-bold text-foreground mb-2">{product.value}</div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full transition-all"
                      style={{ width: `${product.percent}%` }}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Corban Table */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-4">Top Corbans</h2>
          <Card className="bg-card border-border">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b border-border">
                    <tr className="text-left">
                      <th className="px-6 py-3 text-sm font-medium text-muted-foreground">Corban</th>
                      <th className="px-6 py-3 text-sm font-medium text-muted-foreground">Produção</th>
                      <th className="px-6 py-3 text-sm font-medium text-muted-foreground">Compliance</th>
                      <th className="px-6 py-3 text-sm font-medium text-muted-foreground">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "Corban Alpha", production: "R$ 320.000", compliance: "98%", status: "Ativo" },
                      { name: "Corban Beta", production: "R$ 285.000", compliance: "95%", status: "Ativo" },
                      { name: "Corban Gamma", production: "R$ 198.000", compliance: "89%", status: "Revisão" },
                      { name: "Corban Delta", production: "R$ 175.000", compliance: "92%", status: "Ativo" },
                    ].map((corban, index) => (
                      <tr key={index} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                        <td className="px-6 py-4 font-medium text-foreground">{corban.name}</td>
                        <td className="px-6 py-4 text-foreground">{corban.production}</td>
                        <td className="px-6 py-4 text-foreground">{corban.compliance}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            corban.status === "Ativo" 
                              ? "bg-emerald-500/10 text-emerald-500" 
                              : "bg-yellow-500/10 text-yellow-500"
                          }`}>
                            {corban.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
