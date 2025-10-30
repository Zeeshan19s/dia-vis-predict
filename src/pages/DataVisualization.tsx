import React, { useState } from "react";
import Papa from "papaparse";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const DataVisualization: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [columns, setColumns] = useState<string[]>([]);
  const [xColumn, setXColumn] = useState<string>("");
  const [yColumn, setYColumn] = useState<string>("");
  const [chartType, setChartType] = useState<string>("bar");

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        setData(result.data);
        setColumns(Object.keys(result.data[0]));
      },
    });
  };

  const renderChart = () => {
    if (!data.length) return null;

    const chartData = data.map((row) => ({
      x: row[xColumn],
      y: Number(row[yColumn]),
    }));

    switch (chartType) {
      case "pie":
        return (
          <PieChart width={400} height={300}>
            <Pie data={chartData} dataKey="y" nameKey="x" cx="50%" cy="50%" outerRadius={100}>
              {chartData.map((_, index) => (
                <Cell key={index} fill={["#8884d8", "#82ca9d", "#ffc658"][index % 3]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        );
      case "line":
        return (
          <LineChart width={500} height={300} data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="y" stroke="#8884d8" />
          </LineChart>
        );
      default:
        return (
          <BarChart width={500} height={300} data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="y" fill="#82ca9d" />
          </BarChart>
        );
    }
  };

  return (
    <div className="p-8 min-h-screen bg-gray-50">
      <Card className="p-6 shadow-md">
        <CardHeader>
          <h2 className="text-xl font-semibold text-blue-600">
            Data Upload & Visualization Studio
          </h2>
        </CardHeader>
        <CardContent>
          <input type="file" accept=".csv" onChange={handleFileUpload} className="mb-4" />

          {columns.length > 0 && (
            <>
              <div className="flex gap-4 my-4">
                <select
                  className="border p-2 rounded"
                  value={xColumn}
                  onChange={(e) => setXColumn(e.target.value)}
                >
                  <option value="">Select X-axis</option>
                  {columns.map((col) => (
                    <option key={col} value={col}>
                      {col}
                    </option>
                  ))}
                </select>
                <select
                  className="border p-2 rounded"
                  value={yColumn}
                  onChange={(e) => setYColumn(e.target.value)}
                >
                  <option value="">Select Y-axis</option>
                  {columns.map((col) => (
                    <option key={col} value={col}>
                      {col}
                    </option>
                  ))}
                </select>
                <select
                  className="border p-2 rounded"
                  value={chartType}
                  onChange={(e) => setChartType(e.target.value)}
                >
                  <option value="bar">Bar</option>
                  <option value="line">Line</option>
                  <option value="pie">Pie</option>
                </select>
              </div>
              {renderChart()}
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default DataVisualization;
