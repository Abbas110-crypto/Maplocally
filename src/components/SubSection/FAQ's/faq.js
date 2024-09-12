import React from 'react';
import './faq.css';
import { Collapse } from 'antd';

const text = `New York City is known for landmarks like the Statue of Liberty and Times Square, its cultural diversity, Broadway, as a global financial hub, iconic food, museums, and the vibrant city skyline.`;
const items = [
  {
    key: '1',
    label: 'What is New York City best known for?',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: 'When is the best time to visit New York?',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'Where is the best location for tourists to stay in New York?',
    children: <p>{text}</p>,
  },
];
function Faq() {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div>
      <div className='faq-section'>
      <h2 className='Faq-heading'><span>FAQs</span>about New York</h2>
      <div>
      <Collapse defaultActiveKey={['1']} onChange={onChange} items={items} />
      </div>

</div>
    </div>
  )
}

export default Faq;