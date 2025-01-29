import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchGallery } from "./api";
import toast from "react-hot-toast";
import Loader from "./components/Loader/Loader";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import Selector from "./components/Selector/Selector";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(20);
  const [gallery, setGallery] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const { results, total_pages } = await fetchGallery(
          query,
          page,
          perPage
        );
        setGallery((prev) => [...prev, ...results]);
        setTotalPages(total_pages);
        if (results.length === 0) {
          toast.error("No results found");
        }
      } catch {
        toast.error("Error fetching data");
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page, perPage]);

  const handleQuery = (newQuery) => {
    setQuery(newQuery);
    setGallery([]);
    setPage(0);
  };

  const handleChangeLimit = (e) => {
    setGallery([]);
    setPerPage(e.target.value);
    toast.success(`You change visibility filter to ${e.target.value}`);
  };

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  return (
    <>
      <SearchBar onSubmit={handleQuery} />
      <Selector value={perPage} onChange={handleChangeLimit} />
      {!isLoading && isError && <ErrorMessage />}
      <ImageGallery gallery={gallery} onImageClick={openModal} />
      {isLoading && <Loader />}
      {query && totalPages > page + 1 && (
        <LoadMoreBtn onClick={() => setPage((prev) => prev + 1)} />
      )}
      <ImageModal
        isOpen={modalIsOpen}
        image={selectedImage}
        onClose={closeModal}
      />
    </>
  );
}

export default App;
