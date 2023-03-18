import {CSSProperties, useMemo, useState} from "react";

import {GenreDTO} from "../../models/GenreDTO";

import InputSelect from "./InputSelect";

interface Props {
    style?: CSSProperties
    className?: string
    genres: GenreDTO[]
    onSelect: (v: GenreDTO[]) => void
}

const GenreSelect = ({
    style = undefined,
    className = undefined,
    genres,
    onSelect,
}: Props) => {
    const [value, setValue] = useState<string[]>([]);

    const genresOptions = useMemo(() => genres.map(genre => genre.name), [genres]);

    const onChange = (v: string[]) => {
        setValue(v);
        onSelect(genres.filter(genre => v.includes(genre.name)));
    };

    return (
        <InputSelect
            style={style}
            className={className}
            name="genre"
            options={genresOptions}
            value={value}
            onChange={onChange}
        />
    );
};

export default GenreSelect;