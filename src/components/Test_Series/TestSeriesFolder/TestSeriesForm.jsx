import React from 'react';
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Switch } from "../../ui/switch";
import { Button } from "../../ui/button";

const TestSeriesForm = ({ newSeries, setNewSeries, handleCreateTestSeries }) => (
  <div className="space-y-4">
    <div>
      <Label htmlFor="title">Title</Label>
      <Input
        id="title"
        value={newSeries.title}
        onChange={(e) => setNewSeries({ ...newSeries, title: e.target.value })}
        placeholder="Enter test series title"
      />
    </div>
    <div>
      <Label htmlFor="price">Price</Label>
      <Input
        id="price"
        type="number"
        value={newSeries.price}
        onChange={(e) => setNewSeries({ ...newSeries, price: Number(e.target.value) })}
        placeholder="Enter price"
      />
    </div>
    <div>
      <Label htmlFor="sortBy">Sort By</Label>
      <Input
        id="sortBy"
        type="number"
        value={newSeries.sortBy}
        onChange={(e) => setNewSeries({ ...newSeries, sortBy: Number(e.target.value) })}
        placeholder="Sort order"
      />
    </div>
    <div className="flex items-center gap-2">
      <Label>Enabled</Label>
      <Switch
        checked={newSeries.enabled}
        onCheckedChange={(value) => setNewSeries({ ...newSeries, enabled: value })}
      />
    </div>
    <Button
      className="bg-blue-600 hover:bg-blue-700"
      onClick={handleCreateTestSeries}
    >
      Add Test Series
    </Button>
  </div>
);

export default TestSeriesForm;