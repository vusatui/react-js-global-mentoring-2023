import {StyledGenreFilter, StyledGenreFilterItem} from "./styled";
import {SelectOptionDTO} from "../../../../models/SelectOptionDTO";

interface GenreFilterProps {
    options: SelectOptionDTO<string>[]
    value: string
    handleSelect: (value: string) => void
}

// const options: SelectOptionDTO<string>[] = [
//     {
//         id: "all",
//         label: "all",
//         value: "all"
//     },
//     {
//         id: "Documentary",
//         label: "Documentary",
//         value: "Documentary"
//     },
//     {
//         id: "Comedy",
//         label: "Comedy",
//         value: "Comedy"
//     },
//     {
//         id: "Horror",
//         label: "Horror",
//         value: "Horror"
//     },
//     {
//         id: "crime",
//         label: "crime",
//         value: "crime"
//     },
// ];

const GenreFilter = ({
     options,
     value,
     handleSelect,
}: GenreFilterProps) => {
    const handleGenreSelect = (value: string) => {
        handleSelect(value);
    };

    return (
        <StyledGenreFilter>
            {options.map(item => (
                <StyledGenreFilterItem
                    key={item.id}
                    isActive={item.value === value}
                    onClick={() => handleGenreSelect(item.value)}
                >
                    {item.label}
                </StyledGenreFilterItem>
            ))}
        </StyledGenreFilter>
    );
};

export default GenreFilter;