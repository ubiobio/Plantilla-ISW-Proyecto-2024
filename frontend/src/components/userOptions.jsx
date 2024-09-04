export function UserOptions({ src, alt, onEdit, onDelete, row, disabled = false }) {
    const handleEdit = () => {
        if (onEdit) onEdit(row);
    };

    const handleDelete = () => {
        if (onDelete && !disabled) onDelete(row);
    };

    return (
        <>
            <img
            className={`img-options ${disabled ? 'disabled' : ''}`}
            src={src} 
            alt={alt}
            onClick={alt === 'Eliminar' ? handleDelete : handleEdit}
        />
        </>
    );
}