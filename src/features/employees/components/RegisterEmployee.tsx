// import Input from '@material-ui/core/Input';
import { Stack, TextField, Button, Box } from '@mui/material';
import { FormControl, FormLabel } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { styled } from '@mui/system';
import { collection, addDoc } from 'firebase/firestore';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { db } from '../../../firebase';
import { Employee } from '../types';

const StyledFormItem = styled('div')({
  marginBottom: '20px',
});

const StyledTextForm = styled('input')({
  width: '800px',
  height: '50px',
  fontSize: '25px',
});

const RegisterEmployee: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<Employee>();

  const onsubmit = async (data: Employee) => {
    try {
      // TODO 現在時刻を追加する
      // const currentAt = new Date();
      // data['createAt'] = currentAt.getDate().toString();
      // data['updateAt'] = currentAt.getDate().toString();
      console.log(data);
      const userRef = await addDoc(collection(db, 'employees'), data);
      return userRef.id;
    } catch (e) {
      console.log('error :', e);
    }
    reset();
  };

  return (
    <form
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
      onSubmit={handleSubmit(onsubmit)}
    >
      <StyledFormItem>
        <label>名前</label>
        <div>
          <StyledTextForm {...register('name', { required: '入力してください。' })} />
        </div>
      </StyledFormItem>
      <StyledFormItem>
        <label>名前(フリガナ)</label>
        <div>
          <StyledTextForm {...register('nameKana', { required: '入力してください。' })} />
        </div>
      </StyledFormItem>
      <StyledFormItem>
        <label>Eメール</label>
        <div>
          <StyledTextForm {...register('email', { required: '入力してください。' })} />
        </div>
      </StyledFormItem>
      <StyledFormItem>
        <label>性別</label>
        <RadioGroup defaultValue='male' row>
          <FormControlLabel value='male' control={<Radio />} label='男性' {...register('gender')} />
          <FormControlLabel
            value='female'
            control={<Radio />}
            label='女性'
            {...register('gender')}
          />
        </RadioGroup>
      </StyledFormItem>
      <StyledFormItem>
        <label>役職</label>
        <RadioGroup defaultValue='general' row>
          <FormControlLabel
            value='general'
            control={<Radio />}
            label='一般社員'
            {...register('role')}
          />
          <FormControlLabel
            value='management'
            control={<Radio />}
            label='管理職'
            {...register('role')}
          />
        </RadioGroup>
      </StyledFormItem>
      <div
        style={{
          // width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Button
          type='submit'
          color='primary'
          variant='contained'
          style={{ width: '250px', height: '50px' }}
        >
          登録する
        </Button>
      </div>
    </form>
  );
};

export default RegisterEmployee;
