import PropTypes from 'prop-types';
import { MessageSquare } from 'lucide-react';
import Image from 'next/image';
import { UserCog } from 'lucide-react';
import { Calendar } from 'lucide-react';
import Link from 'next/link';

const BlogList = ({ imageSrc, date, title, description, comments, author }: any) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-12">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <Image
            className="h-48 w-full object-cover md:w-48"
            src={imageSrc}
            alt={title}
            width={192}
            height={192}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-[#FF9F0D] font-semibold flex flex-row gap-2"><Calendar/>{date}</div>
          <Link href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
          {title}
          </Link>
          <p className="mt-2 text-gray-500">{description}</p>
          <div className="mt-4">
            <span className="text-gray-500 flex flex-row gap-2"><MessageSquare className='text-[#FF9F0D]'/>{comments} comments</span>
            <span className="ml-4 text-gray-500 flex flex-row gap-2"><UserCog className='text-[#FF9F0D]'/>{author}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

BlogList.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  comments: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
};

export default BlogList;