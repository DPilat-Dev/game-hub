import platforms from "../data/platforms";

interface Platform {
    id: number;
    name: string;
    slug: string;
}

//useData<Platform>('/platforms/lists/parents');
const usePlatforms = () => ({ data: platforms, isLoading: false, error: null});

export default usePlatforms;