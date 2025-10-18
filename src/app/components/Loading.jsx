import Container from '@/app/components/Container';
import React from 'react';

const Loading = () => {
    return (
        <div>
                  <Container>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </Container>
        </div>
    );
};

export default Loading;