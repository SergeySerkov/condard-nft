const style = {
    topBar: `bg-[#303339] p-1 rounded-lg border-[#151c22] border`,
    topBarContent: `flex items-center`,
    likesCounter: `flex-1 flex items-center justify-end`,
};

const NFTImage = ({ selectedNft }) => {
    return (
        <div>
            <div>
                <img src={selectedNft?.metadata.image} className={style.topBar} />
            </div>
        </div>
    );
};

export default NFTImage;