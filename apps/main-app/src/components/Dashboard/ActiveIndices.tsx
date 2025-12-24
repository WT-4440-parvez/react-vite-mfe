import React from 'react';
import { IndexItem } from '../../types';
import IndexCard from './IndexCard';

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


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {indices.map((index, i) => (
          // <div key={i} className="group relative p-6 border border-gray-200 rounded-xl hover:border-sgx-100">
          //   <div className="flex-1">
          //     <div className="flex items-center gap-3 mb-1">
          //       <h3 className="font-medium text-gray-900">{index.name}</h3>
          //       <div className={`w-2 h-2 rounded-full ${index.health === 'healthy' ? 'bg-green-500' : 'bg-red-500'}`}></div>
          //     </div>
          //     <p className="text-sm text-gray-500">Last run {index.time}</p>
          //   </div>
          //   <div className="text-right">
          //     <div className="text-lg font-semibold text-gray-900">{index.performance}</div>
          //     <div className="text-xs text-gray-500">Performance</div>
          //   </div>
          //   <Button color={`${index.status === 'Running' ? 'success' : 'primary'}`}>
          //     {index.status}
          //   </Button>
          // </div>
          <IndexCard
            key={i}
            name={index.name}
            time={index.time}
            health={index.health}
            status={index.status}
            performance={index.performance}
            onHistoryClick={() => console.log(`Viewing history for ${index.name}`)}
          />
        ))}
      </div>
      
    </div>
  );
};

export default ActiveIndices;