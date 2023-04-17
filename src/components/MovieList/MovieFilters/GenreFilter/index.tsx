import {StyledGenreFilter, StyledGenreFilterItem} from "./styled";
import {SelectOptionDTO} from "../../../../models/SelectOptionDTO";

const options: SelectOptionDTO<string>[] = [
    {
        id: "all",
        label: "all",
        value: "all"
    },
    {
        id: "Documentary",
        label: "Documentary",
        value: "Documentary"
    },
    {
        id: "Comedy",
        label: "Comedy",
        value: "Comedy"
    },
    {
        id: "Horror",
        label: "Horror",
        value: "Horror"
    },
    {
        id: "crime",
        label: "crime",
        value: "crime"
    },
];

const GenreFilter = () => {
    return (
        <StyledGenreFilter>
            {options.map(item => (
                <StyledGenreFilterItem
                    key={item.id}
                    isActive={true}
                >
                    {item.label}
                </StyledGenreFilterItem>
            ))}
        </StyledGenreFilter>
    );
};

export default GenreFilter;