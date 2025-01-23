import { toast } from "react-hot-toast";
import {
  CheckCircle2,
  XCircle,
  Bell,
  ShieldAlert,
} from "lucide-react";

const showErrorToast = (errorMessage) => {
  toast.custom((t) => (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } max-w-md w-full bg-primary shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5">
            <ShieldAlert className="h-10 w-10 text-red-500 animate-pulse" />
          </div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-primary-content">Error Detected</p>
            <p className="mt-1 text-sm text-secondary-content">
              {errorMessage || "something went wrong"}
            </p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-gray-200">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-red-600 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Dismiss
        </button>
      </div>
    </div>
  ));
};

const showSuccessToast = (successMessage) => {
  toast.custom((t) => (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } max-w-md w-full bg-primary shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5">
            <CheckCircle2 className="h-10 w-10 text-green-500" />
          </div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-primary-content">Success!</p>
            <p className="mt-1 text-sm text-secondary-content">
              {successMessage || `Your action has been completed successfully.`}
            </p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-gray-200">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-green-600 hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Done
        </button>
      </div>
    </div>
  ));
};

const showPromiseToast = (promiseMessage) => {
  toast.promise(new Promise((resolve) => setTimeout(resolve, 0)), {
    loading: (
      <div className="flex items-center space-x-2 p-4 bg-primary rounded-lg shadow-lg">
        {/* Single Loader */}
        {/* <Loader2 className="h-6 w-6 text-blue-500 animate-spin" /> */}
        <div>
          <p className="text-sm font-medium text-primary-content">Processing</p>
          <p className="text-sm text-secondary-content">
            Please wait while we complete your request...
          </p>
        </div>
      </div>
    ),
    success: (
      <div className="flex items-center space-x-2 p-4 bg-primary rounded-lg shadow-lg">
        {/* <CheckCircle2 className="h-6 w-6 text-green-500" /> */}
        <div>
          <p className="text-sm font-medium text-primary-content">Complete!</p>
          <p className="text-sm text-secondary-content">
            {promiseMessage || `Your request has been processed successfully.`}
          </p>
        </div>
      </div>
    ),
    error: (
      <div className="flex items-center space-x-2 p-4 bg-primary rounded-lg shadow-lg">
        {/* <XCircle className="h-6 w-6 text-red-500" /> */}
        <div>
          <p className="text-sm font-medium text-primary-content">Failed</p>
          <p className="text-sm text-secondary-content">
            An error occurred while processing your request.
          </p>
        </div>
      </div>
    ),
  });
};

const showNotification = () => {
  toast.custom((t) => (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } max-w-md w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg rounded-lg pointer-events-auto flex p-4`}
    >
      <div className="flex-1 flex items-center">
        <Bell className="h-6 w-6 animate-bounce" />
        <div className="ml-3">
          <p className="font-medium">New Notification</p>
          <p className="text-sm opacity-90">You have a new message waiting!</p>
        </div>
      </div>
      <button
        onClick={() => toast.dismiss(t.id)}
        className="ml-4 flex-shrink-0 rounded-full p-1 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-white"
      >
        <XCircle className="h-5 w-5" />
      </button>
    </div>
  ));
};

export { showErrorToast, showSuccessToast, showPromiseToast, showNotification };
