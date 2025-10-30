import { useState } from 'react';
import { useData } from '@/contexts/DataContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { BarChart3, TrendingUp, PieChartIcon, ScatterChartIcon } from 'lucide-react';
import { toast } from 'sonner';

const COLORS = ['hsl(188, 91%, 36%)', 'hsl(186, 100%, 42%)', 'hsl(142, 71%, 45%)', 'hsl(38, 92%, 50%)', 'hsl(0, 84%, 60%)'];

const Visualization = () => {
  const { data, columns } = useData();
  const [xAxis, setXAxis] = useState<string>('');
  const [yAxis, setYAxis] = useState<string>('');
  const [chartType, setChartType] = useState<string>('bar');
  const [chartData, setChartData] = useState<any[]>([]);
  const [showChart, setShowChart] = useState(false);

  const generateChart = () => {
    if (!xAxis || !yAxis) {
      toast.error('Please select both X and Y axis');
      return;
    }

    if (data.length === 0) {
      toast.error('Please upload a dataset first');
      return;
    }

    // Prepare data for visualization
    const preparedData = data.map((row) => ({
      x: row[xAxis],
      y: Number(row[yAxis]) || 0,
      name: String(row[xAxis]),
    }));

    setChartData(preparedData);
    setShowChart(true);
    toast.success('Chart generated successfully!');
  };

  const resetChart = () => {
    setChartData([]);
    setShowChart(false);
    setXAxis('');
    setYAxis('');
    setChartType('bar');
  };

  const renderChart = () => {
    if (!showChart || chartData.length === 0) return null;

    const commonProps = {
      data: chartData,
      margin: { top: 20, right: 30, left: 20, bottom: 20 },
    };

    switch (chartType) {
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart {...commonProps}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '0.5rem'
                }} 
              />
              <Legend />
              <Bar dataKey="y" fill="hsl(var(--primary))" name={yAxis} />
            </BarChart>
          </ResponsiveContainer>
        );
      
      case 'line':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart {...commonProps}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '0.5rem'
                }} 
              />
              <Legend />
              <Line type="monotone" dataKey="y" stroke="hsl(var(--accent))" strokeWidth={2} name={yAxis} />
            </LineChart>
          </ResponsiveContainer>
        );
      
      case 'pie':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={chartData.slice(0, 10)}
                dataKey="y"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                label
              >
                {chartData.slice(0, 10).map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '0.5rem'
                }} 
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        );
      
      case 'scatter':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <ScatterChart {...commonProps}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="x" stroke="hsl(var(--muted-foreground))" name={xAxis} />
              <YAxis dataKey="y" stroke="hsl(var(--muted-foreground))" name={yAxis} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '0.5rem'
                }} 
                cursor={{ strokeDasharray: '3 3' }}
              />
              <Legend />
              <Scatter name={`${xAxis} vs ${yAxis}`} fill="hsl(var(--primary))" />
            </ScatterChart>
          </ResponsiveContainer>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="animate-fade-in space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Visualization Studio</h1>
        <p className="text-muted-foreground">
          Create interactive charts to explore your data
        </p>
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Chart Configuration</CardTitle>
          <CardDescription>Select columns and chart type to visualize your data</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {data.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">Please upload a dataset first to create visualizations</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">X-Axis</label>
                  <Select value={xAxis} onValueChange={setXAxis}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select column" />
                    </SelectTrigger>
                    <SelectContent>
                      {columns.map((col) => (
                        <SelectItem key={col} value={col}>
                          {col}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Y-Axis</label>
                  <Select value={yAxis} onValueChange={setYAxis}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select column" />
                    </SelectTrigger>
                    <SelectContent>
                      {columns.map((col) => (
                        <SelectItem key={col} value={col}>
                          {col}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Chart Type</label>
                  <Select value={chartType} onValueChange={setChartType}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bar">
                        <div className="flex items-center gap-2">
                          <BarChart3 className="h-4 w-4" />
                          Bar Chart
                        </div>
                      </SelectItem>
                      <SelectItem value="line">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-4 w-4" />
                          Line Chart
                        </div>
                      </SelectItem>
                      <SelectItem value="pie">
                        <div className="flex items-center gap-2">
                          <PieChartIcon className="h-4 w-4" />
                          Pie Chart
                        </div>
                      </SelectItem>
                      <SelectItem value="scatter">
                        <div className="flex items-center gap-2">
                          <ScatterChartIcon className="h-4 w-4" />
                          Scatter Plot
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex gap-3">
                <Button onClick={generateChart} className="flex-1">
                  Generate Chart
                </Button>
                <Button onClick={resetChart} variant="outline">
                  Reset
                </Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>

      {showChart && (
        <Card className="shadow-card animate-slide-up">
          <CardHeader>
            <CardTitle>Generated Visualization</CardTitle>
            <CardDescription>
              {xAxis} vs {yAxis} - {chartType.charAt(0).toUpperCase() + chartType.slice(1)} Chart
            </CardDescription>
          </CardHeader>
          <CardContent>
            {renderChart()}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Visualization;
