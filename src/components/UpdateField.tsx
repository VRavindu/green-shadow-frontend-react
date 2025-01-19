const UpdateField = ({ onClose, fieldData, onUpdate }) => {
    const handleFileChange = (e, field) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                // You can update the image field (e.g., image1 or image2) with the reader result.
                field[field] = reader.result; // You might need to adjust this to your image update logic
            };
            reader.readAsDataURL(file);
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
                {/* Modal Header */}
                <div className="flex justify-between items-center border-b pb-4 mb-4">
                    <h5 className="text-xl font-semibold text-gray-800">Update Field</h5>
                    <button
                        type="button"
                        className="text-gray-500 hover:text-gray-800"
                        onClick={onClose}
                        aria-label="Close"
                    >
                        ✕
                    </button>
                </div>

                {/* Modal Body */}
                <div className="space-y-4">
                    <form
                        id="updateFieldForm"
                        onSubmit={(e) => {
                            e.preventDefault();
                            const updatedField = {
                                id: fieldData?.id,
                                name: e.target.fieldName.value,
                                locationX: e.target.fieldLocationX.value,
                                locationY: e.target.fieldLocationY.value,
                                size: e.target.fieldSize.value,
                            };
                            onUpdate(updatedField); // Callback for updating the field
                            onClose(); // Close the modal after updating
                        }}
                    >
                        <div className="mb-4">
                            <label htmlFor="fieldName" className="block text-sm font-medium text-gray-700">
                                Field Name
                            </label>
                            <input
                                type="text"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-200 p-1.5"
                                id="fieldName"
                                defaultValue={fieldData?.name}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="fieldLocationX" className="block text-sm font-medium text-gray-700">
                                Location X
                            </label>
                            <input
                                type="number"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-200 p-1.5"
                                id="fieldLocationX"
                                defaultValue={fieldData?.locationX}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="fieldLocationY" className="block text-sm font-medium text-gray-700">
                                Location Y
                            </label>
                            <input
                                type="number"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-200 p-1.5"
                                id="fieldLocationY"
                                defaultValue={fieldData?.locationY}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="fieldSize" className="block text-sm font-medium text-gray-700">
                                Field Size
                            </label>
                            <input
                                type="number"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-200 p-1.5"
                                id="fieldSize"
                                defaultValue={fieldData?.size}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="fieldImage1" className="block text-sm font-medium text-gray-700">
                                Upload New Image 1 (Optional)
                            </label>
                            <input
                                type="file"
                                className="mt-1 block w-full text-gray-700 border border-gray-300 rounded-md bg-gray-200 p-1.5"
                                id="image1"
                                accept="image/*"
                                onChange={(e) => handleFileChange(e, 'image1')}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="fieldImage2" className="block text-sm font-medium text-gray-700">
                                Upload New Image 2 (Optional)
                            </label>
                            <input
                                type="file"
                                className="mt-1 block w-full text-gray-700 border border-gray-300 rounded-md bg-gray-200 p-1.5"
                                id="image2"
                                accept="image/*"
                                onChange={(e) => handleFileChange(e, 'image2')}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-3xl hover:bg-blue-700"
                        >
                            Update Field
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateField;
