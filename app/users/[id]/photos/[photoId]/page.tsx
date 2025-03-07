import React from "react";

interface Props {
  params: Promise<{ id: number; photoId: number }>;
}

const PhotoDetail = async ({ params }: Props) => {
  const { id, photoId } = await params;
  return (
    <div>
      Photo Detail {id} {photoId}
    </div>
  );
};

export default PhotoDetail;
