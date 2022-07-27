import Header from "../../components/Header";
import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import NFTImage from '../../components/nft/NFTImage';
import GeneralDetails from "../../components/nft/GeneralDetails";
import ItemActivity from '../../components/nft/ItemActivity';
import Purchase from '../../components/nft/Purchase';

import { useNFTCollection } from "@thirdweb-dev/react";
import { useMarketplace } from '@thirdweb-dev/react';

const style = {
    wrapper: `flex flex-col items-center container-lg text-[#e5e8eb]`,
    container: `container p-6`,
    topContent: `flex`,
    nftImgContainer: `flex-1 mr-4`,
    detailsContainer: `flex-[2] ml-4`,
};

const Nft = () => {

    const [selectedNft, setSelectedNft] = useState();
    const [listings, setListings] = useState([]);

    const router = useRouter();

    const nftCollection = useNFTCollection("0xE8F0d0B92c7F517C1F9C4e34b3ab34b77F647C37");
    useEffect(() => {
        if (nftCollection) {
            nftCollection
                .getAll()
                .then((nfts) => {
                    const selectedNftItem = nfts.find((nft) => nft.metadata.id.toString() == router.query.nftId);

                    setSelectedNft(selectedNftItem);
                })
                .catch((error) => {
                    console.error("failed to fetch nfts", error);
                });
        }
    }, [nftCollection]);

    const marketplaceAddress = "0x090801c128453313b71B784a75CB3d84025C69aF";
    const marketPlaceModule = useMarketplace(marketplaceAddress);

    useEffect(() => {
        if (!marketPlaceModule) return

            ; (async () => {
                const listings = await marketPlaceModule.getAll();
                setListings(listings);
            })();

    }, [marketPlaceModule]);


    return (
        <div>
            <Header />
            <div className={style.wrapper}>
                <div className={style.container}>
                    <div className={style.topContent}>
                        <div className={style.nftImgContainer}>
                            <NFTImage selectedNft={selectedNft} />
                        </div>
                        <div className={style.detailsContainer}>
                            <GeneralDetails selectedNft={selectedNft} />
                            <Purchase
                                isListed={router.query.isListed}
                                selectedNft={selectedNft}
                                listings={listings}
                                marketPlaceModule={marketPlaceModule}
                            />
                        </div>
                    </div>
                    <ItemActivity />
                </div>
            </div>
        </div>
    );
};


export default Nft;