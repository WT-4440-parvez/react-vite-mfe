import React from 'react';
import { IndexItem } from '../../types';

interface ActiveIndicesProps {
  indices: IndexItem[];
}

const ActiveIndices: React.FC<ActiveIndicesProps> = ({ indices }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Active Indices</h2>
          <p className="text-sm text-gray-500">Click to view execution details</p>
        </div>
        <div className="flex gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-600">Healthy</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-gray-600">Issues</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {indices.map((index, i) => (
          <div key={i} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <h3 className="font-medium text-gray-900">{index.name}</h3>
                <div className={`w-2 h-2 rounded-full ${index.health === 'healthy' ? 'bg-green-500' : 'bg-red-500'}`}></div>
              </div>
              <p className="text-sm text-gray-500">Last run {index.time}</p>
            </div>
            <div className="text-right">
              <div className="text-lg font-semibold text-gray-900">{index.performance}</div>
              <div className="text-xs text-gray-500">Performance</div>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              index.status === 'Running' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
            }`}>
              {index.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveIndices;