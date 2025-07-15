import { Circles } from "react-loader-spinner";

interface LoadingSpinnerProps {
  isLoading: boolean;
}

const LoadingSpinner = ({ isLoading }: LoadingSpinnerProps) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <Circles color="#0066FF" height={80} width={80} />
    </div>
  );
};

export default LoadingSpinner;
