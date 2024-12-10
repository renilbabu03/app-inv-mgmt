import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import './Login.scss';

type FieldType = {
  date?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};


const Login: React.FC = () => {
  return (
    <>
   
    </>
  )
}
export default Login;