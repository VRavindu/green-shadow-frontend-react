import { useState } from 'react';

const AddField = ({ onClose, onSave }) => {
    const [image1Preview, setImage1Preview] = useState(null);
    const [image2Preview, setImage2Preview] = useState(null);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Collect data from form inputs
        const newField = {
            name: e.target.fieldName.value,
            locationX: parseFloat(e.target.fieldLocationX.value),
            locationY: parseFloat(e.target.fieldLocationY.value),
            size: parseFloat(e.target.fieldSize.value),
            image1: e.target.image1.files[0], // File data
            image2: e.target.image2.files[0], // File data
        };

        // Pass the data back to the parent component
        onSave(newField);

        // Close the modal
        onClose();
    };

    // Handle image selection and preview
    const handleImage1Change = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage1Preview(URL.createObjectURL(file));
        }
    };

    const handleImage2Change = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage2Preview(URL.createObjectURL(file));
        }
    };

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={onClose}
        >
            <div
                className="backdrop-blur-md bg-stone-300 bg-opacity-90 rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 p-6 relative"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center border-b pb-4 mb-4">
                    <h5 className="text-xl font-semibold text-gray-800">Add New Field</h5>
                    <button
                        type="button"
                        className="text-gray-500 hover:text-gray-800"
                        onClick={onClose}
                        aria-label="Close"
                    >
                        ✕
                    </button>
                </div>

                <form onSubmit={handleFormSubmit}>
                    <div className="mb-4">
                        <label htmlFor="fieldName" className="block text-sm font-medium text-gray-700">
                            Field Name
                        </label>
                        <input
                            type="text"
                            id="fieldName"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-200 p-1.5"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="fieldLocationX" className="block text-sm font-medium text-gray-700">
                            Location X
                        </label>
                        <input
                            type="number"
                            id="fieldLocationX"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-200 p-1.5"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="fieldLocationY" className="block text-sm font-medium text-gray-700">
                            Location Y
                        </label>
                        <input
                            type="number"
                            id="fieldLocationY"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-200 p-1.5"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="fieldSize" className="block text-sm font-medium text-gray-700">
                            Field Size
                        </label>
                        <input
                            type="number"
                            id="fieldSize"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-200 p-1.5"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="image1" className="block text-sm font-medium text-gray-700">
                            Upload Image 1
                        </label>
                        <input
                            type="file"
                            id="image1"
                            accept="image/*"
                            className="mt-1 block w-full text-gray-700 border border-gray-300 rounded-md bg-gray-200 p-1.5"
                            required
                            onChange={handleImage1Change}
                        />
                        {image1Preview && (
                            <img src={image1Preview} alt="Image 1 Preview" className="mt-2 w-full h-40 object-cover rounded-md" />
                        )}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="image2" className="block text-sm font-medium text-gray-700">
                            Upload Image 2
                        </label>
                        <input
                            type="file"
                            id="image2"
                            accept="image/*"
                            className="mt-1 block w-full text-gray-700 border border-gray-300 rounded-md bg-gray-200 p-1.5"
                            required
                            onChange={handleImage2Change}
                        />
                        {image2Preview && (
                            <img src={image2Preview} alt="Image 2 Preview" className="mt-2 w-full h-40 object-cover rounded-md" />
                        )}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-3xl hover:bg-blue-700"
                    >
                        Save Field
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddField;
