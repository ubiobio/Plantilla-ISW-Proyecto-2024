const Filter = ({ filterText, onFilter }) => (
	<>
		<input
			id="search"
			type="text"
			placeholder="Filtrar por nombre de usuario"
			value={filterText}
			onChange={onFilter}
			autoComplete="off"

		/>
	</>
);

export default Filter;