// import { useMultiplierService } from 'shared/services/multiplierService';
import CreateRadioView from './CreateRadioView';

const CreateRadioContainer = () => {
  // const { getMultipliers } = useMultiplierService();
  // const { data } = getMultipliers();
  const options = [
    'interview',
    'Logo Exposure',
    'Product Exposure',
    'Brand Mention',
    'Event',
    'Prime Time Radio AM 6PM-9PM',
    'Prime Time Radio AM 6AM-9AM Lunch',
    'Prime Time Radio FM 6PM-9PM',
    'Prime Time Radio FM 6AM-9AMs',
  ];
  return (
    <div>
      <CreateRadioView multiplierSource={options} />
    </div>
  );
};

export default CreateRadioContainer;
