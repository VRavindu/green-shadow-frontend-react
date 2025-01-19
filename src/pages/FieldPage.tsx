import '../styles/FieldPage.css';
import { SideMenu } from '../components/SideMenu.tsx';
import { useState } from 'react';
import AddField from '../components/AddField.tsx';
import UpdateField from '../components/UpdateField.tsx';
import updateIcon from '../assets/icon/update.svg';
import deleteIcon from '../assets/icon/trash-delete-bin.svg';
import FieldA from '../assets/image/field-a.jpg';
import FieldB from '../assets/image/field-b.jpg';

export function FieldPage() {
    const [showAddModal, setShowAddModal] = useState(false); // For AddField modal
    const [showUpdateModal, setShowUpdateModal] = useState(false); // For UpdateField modal
    const [selectedField, setSelectedField] = useState(null); // Store the field data for update

    // Dummy field data (this would normally come from an API or state)
    const [fields, setFields] = useState([
        { id: 1, name: "Field A", locationX: 45, locationY: 60, size: 100, image1: FieldA },
        { id: 2, name: "Field B", locationX: 50, locationY: 70, size: 200, image1: FieldB },
    ]);

    // Open AddField modal
    const handleAddFieldClick = () => {
        setShowAddModal(true);
    };

    // Open UpdateField modal with selected field
    const handleUpdateFieldClick = (field) => {
        setSelectedField(field);
        setShowUpdateModal(true);
    };

    // Close AddField modal
    const handleCloseAddModal = () => {
        setShowAddModal(false);
    };

    const handleCloseUpdateModal = () => {
        setShowUpdateModal(false);
        setSelectedField(null); // Reset selected field
    };

    const handleSaveField = (newField) => {
        const newId = fields.length > 0 ? Math.max(...fields.map((f) => f.id)) + 1 : 1;
        const fieldWithId = { ...newField, id: newId };
        setFields((prevFields) => [...prevFields, fieldWithId]);
        setShowAddModal(false);
    };

    const handleUpdateField = (updatedField) => {
        // Ensure the updated field is correctly updated in the state
        setFields((prevFields) =>
            prevFields.map((field) =>
                field.id === updatedField.id ? { ...field, ...updatedField } : field
            )
        );
        setShowUpdateModal(false);
        setSelectedField(null); // Reset selected field
    };

    const handleDeleteFieldClick = (field) => {
        const confirmDelete = window.confirm(`Are you sure you want to delete ${field.name}?`);

        if (confirmDelete) {
            setFields((prevFields) => prevFields.filter((f) => f.id !== field.id));
        }
    };

    return (
        <div className="flex h-screen">
            <SideMenu />
            <div className="container-main">
                <main className="main-content w-full">
                    <header className="content-header m-10">
                        <h1 className="text-3xl font-bold">Fields</h1>
                        <div className="search-container">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="search-bar"
                            />
                            <button className="search-btn">Search</button>
                        </div>
                        <button
                            className="add-button"
                            onClick={handleAddFieldClick}
                        >
                            + Add Field
                        </button>
                    </header>

                    <div className="cards-container grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-4" id="cardsContainer">
                        {fields.length > 0 ? (
                            fields.map((field) => (
                                <div
                                    key={field.id}
                                    className="field-card p-4 border rounded-md shadow-md mb-4"
                                >
                                    <div className="field-image-container">
                                        {field.image1 ? (
                                            <img
                                                src={field.image1} // Directly using the imported image URL
                                                alt="Field"
                                                className="field-image"
                                            />
                                        ) : (
                                            <div className="field-image-placeholder">
                                                No Image Available
                                            </div>
                                        )}
                                    </div>

                                    <div className="field-details mt-4">
                                        <h2 className="text-xl font-semibold">
                                            {field.name}
                                        </h2>
                                        <p>
                                            Location: ({field.locationX}, {field.locationY})
                                        </p>
                                        <p>Size: {field.size} sq. meters</p>
                                    </div>

                                    <button
                                        className="update-button mt-2 text-blue-500 underline"
                                        onClick={() => handleUpdateFieldClick(field)}
                                    >
                                        <img src={updateIcon} alt="Update Icon" className='w-5 h-5 mr-2'/>
                                    </button>
                                    <button
                                        className="delete-button mt-2 text-red-500 underline"
                                        onClick={() => handleDeleteFieldClick(field)}  // Function for deleting the field
                                    >
                                        <img src={deleteIcon} alt="Delete Icon" className='w-5 h-5 mr-2'/>
                                    </button>

                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">No fields available.</p>
                        )}
                    </div>
                </main>

                {/* AddField Modal */}
                {showAddModal && (
                    <AddField
                        onClose={handleCloseAddModal}
                        onSave={handleSaveField}
                    />
                )}

                {/* UpdateField Modal */}
                {showUpdateModal && selectedField && (
                    <UpdateField
                        onClose={handleCloseUpdateModal}
                        fieldData={selectedField}
                        onUpdate={handleUpdateField}
                    />
                )}
            </div>
        </div>
    );
}
