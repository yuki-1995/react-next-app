import { Button } from '@mui/material';
import { styled } from '@mui/system';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../../firebase';
import { Employee } from '../types';

type employeeType = {
  name: string;
  email: string;
};

const EmployeeList: React.FC = () => {
  const getEmployeeList = () => {
    const employeesCollectionRef = collection(db, 'employees');
    getDocs(employeesCollectionRef).then((querySnapshot) => {
      const employeeList: employeeType[] = [];
      querySnapshot.docs.map((doc, index) => {
        console.log('doc.data()', doc.data());
        const tmp = {
          name: doc.data().name,
          email: doc.data().email,
        };
        employeeList.push(tmp);
      });
      console.log('employeeList', employeeList);
    });
  };

  return (
    <div>
      <p>リスト</p>
      <Button
        color='primary'
        variant='contained'
        style={{ width: '250px', height: '50px' }}
        onClick={getEmployeeList}
      >
        データ取得
      </Button>
    </div>
  );
};

export default EmployeeList;
