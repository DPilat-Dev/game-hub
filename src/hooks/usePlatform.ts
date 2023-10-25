import usePlatforms from "./usePlatforms";

const usePlatfom = (id?: number) => {
    const {data: platforms} = usePlatforms();
    return platforms?.results.find(g => g.id === id);
}

export default usePlatfom;