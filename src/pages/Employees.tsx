import react from 'react';
import EmployeeList from '@/features/employees/components/EmployeeList';

const Employees: React.FC = () => {
  return (
    <div
      style={{
        width: 'calc(100vw - 200px)',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div>
        <h2>従業員一覧画面</h2>
        <EmployeeList />
      </div>
    </div>
  );
};

export default Employees;
