import react from 'react';
import RegisterEmployee from '@/features/employees/components/RegisterEmployee';

const Employee: React.FC = () => {
  return (
    <div
      style={{
        width: 'calc(100vw - 200px)',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div>
        <h2>従業員追加画面</h2>
        <RegisterEmployee />
      </div>
    </div>
  );
};

export default Employee;
